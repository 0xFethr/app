import * as PushAPI from "@pushprotocol/restapi";

export const fetchNotifs = async(address) => {
	const notifications = await PushAPI.user.getFeeds({
		user: `eip155:5:${address}`, // user address in CAIP-10
		env: 'staging'
	});
	console.log('Notifications: \n', notifications);
	return notifications
}

export const sendNotifications = async(channelAddress,signer,body,title) => {
	const apiResponse = await PushAPI.payloads.sendNotification({
		signer: signer,
		type: 1, 
		identityType: 2,
		notification: {
		  title: title,
		  body: body
		},
		payload: {
			title:title,
			body: body,
		},
		channel: `eip155:5:${channelAddress}`, // your channel address
		env: 'staging'
	});
	console.log('Notifications: \n', apiResponse);
	return apiResponse
}

export const optIn = async(userAddress,channelAddress,signer) => {
	await PushAPI.channels.subscribe({
		signer: signer,
		channelAddress: `eip155:5:${channelAddress}`,
		userAddress: `eip155:5:${userAddress}`, 
		onSuccess: () => {
			console.log('opt in success');
		},
		onError: () => {
			console.error('opt in error');
		},
		env: 'staging'
	})
}

export const optOut = async(userAddress,channelAddress,signer) => {
	await PushAPI.channels.unsubscribe({
		signer: signer,
		channelAddress: `eip155:5:${channelAddress}`,
		userAddress: `eip155:5:${userAddress}`, 
		onSuccess: () => {
			console.log('opt in success');
		},
		onError: () => {
			console.error('opt in error');
		},
		env: 'staging'
	})
}

export const checkUserSubscriptions = async(address, authorAddress) =>{
	const subscriptions = await PushAPI.user.getSubscriptions({
		user: `eip155:5:${address}`,
		env: 'staging'
	});

	const isUserSubscribed = subscriptions.map(item=>item.channel)
										.includes(authorAddress)

	return (isUserSubscribed && subscriptions)						
}

export const checkChannel = async(address) =>{
	
	const channel = await PushAPI.channels.getChannel({
		channel: `eip155:5:${address}`,
		env: 'staging'
	});
	return channel&&true				
}