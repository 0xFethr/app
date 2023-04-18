import { Box, Button, Flex, Text, TextField } from '@livepeer/design-system';
import { Player, useCreateStream } from '@livepeer/react';
import { useMemo, useState } from 'react';
import Loader from './Loader';

export const LiveStream = () => {
  const [streamName, setStreamName] = useState('');
  
  const {
	mutate: createStream,
	data: stream,
	status,
  } = useCreateStream(streamName ? { name: streamName } : null);

  const isLoading = useMemo(() => status === 'loading', [status]);

  return (
	<Box className='my-2'>
		<Box
			className='w-full mb-3 text-[black]'>
			<TextField
			size="3"
			type="text"
			placeholder="Stream name"
			onChange={(e) => setStreamName(e.target.value)}
			/>
	  	</Box>

	  {stream &&
		stream.rtmpIngestUrl &&
		(!stream?.playbackUrl || !stream.isActive) && (
		  <Text 
		  	size="3" 
			variant="gray" 
			className='mt-4 mb-3'>
			Use the ingest URL <code>{stream.rtmpIngestUrl}</code> in a stream
			client like OBS to see content below.
		  </Text>
		)}

	  {stream?.playbackId && (
		<Box className='mt-3'>
		  <Player
			title={stream?.name}
			playbackId={stream?.playbackId}
			autoPlay
			muted
		  />
		</Box>
	  )}

	  <Flex className=' justify-end gap-3 mt-4'>
		{!stream && (
		  <Button
			className='flex items-center '
			onClick={() => {
			  createStream?.();
			}}
			size="2"
			disabled={isLoading || !createStream}
			variant="purple"
		  >
			{isLoading && <Loader/>}
			Create Stream
		  </Button>
		)}
	  </Flex>
	</Box>
  );
};
