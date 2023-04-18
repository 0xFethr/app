import { Cacao, SiweMessage } from '@didtools/cacao';
import { randomString } from '@stablelib/random';
import { AccountId } from 'caip';
import { useSignMessage } from 'wagmi'
export const CHAIN_NAMESPACE = 'eip155'

export var EthereumWebAuth;
(function(EthereumWebAuth) {
    async function getAuthMethod(ethProvider, account, signMessageAsync) {
        if (typeof window === 'undefined') throw new Error('Web Auth method requires browser environment');
        const domain = window.location.hostname;
        return async (opts)=>{
            opts.domain = domain;
            return createCACAO(opts, ethProvider, account, signMessageAsync);
        };
    }
    EthereumWebAuth.getAuthMethod = getAuthMethod;
})(EthereumWebAuth || (EthereumWebAuth = {}));

async function createCACAO(opts, ethProvider, account, signMessageAsync) {
    const now = new Date();
    const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    console.log(opts.domain)
    const siweMessage = new SiweMessage({
        domain: opts.domain,
        address: account.address,
        statement: opts.statement ?? 'Give this application access to some of your data on Ceramic',
        uri: opts.uri,
        version: 1,
        nonce: opts.nonce ?? randomString(10),
        issuedAt: now.toISOString(),
        expirationTime: oneWeekLater.toISOString(),
        chainId: account.chainId.reference,
        resources: opts.resources
    });
    const data = await signMessageAsync({message:siweMessage.signMessage()})
    siweMessage.signature = data;
    return Cacao.fromSiweMessage(siweMessage);
}

async function requestChainId(provider) {
    const chainIdHex = await provider.send('eth_chainId', [])
    return parseInt(chainIdHex, 16);
}

export async function getAccountId(ethProvider, address) {
    const ethChainId = await requestChainId(ethProvider);
    const chainId = `${CHAIN_NAMESPACE}:${ethChainId}`;
    return new AccountId({
        address,
        chainId
    });
}
