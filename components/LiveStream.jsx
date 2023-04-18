import { Box, Button, Flex, Text, TextField } from '@livepeer/design-system';
import { useCreateStream } from '@livepeer/react';
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
	<Box className='my-2 h-[60%]'>
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
			Use the ingest URL rtmp://rtmp.livepeer.com/live and key
			<code> {stream.rtmpIngestUrl.match(/\/([^\/]+)$/)[1]} </code> 
			in a stream client like OBS to see content below.

		  </Text>
		)}

		<a className="underline opacity-30 hover:opacity-60" href="http://">Link to OBS</a>

	  {stream?.playbackId && (
		<Box className='mt-3 h-full flex items-center justify-center relative z-40'>
			<iframe
				src={`https://lvpr.tv?v=${stream.playbackId}`}
				width={'100%'}
				height={'100%'}
				allowFullScreen
				allow="autoplay; encrypted-media; picture-in-picture"
				sandbox="allow-scripts"
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
