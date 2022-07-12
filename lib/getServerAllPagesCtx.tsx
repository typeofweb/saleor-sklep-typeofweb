import { getServerPageChannelsGet } from '../generated/page';

export const getServerAllPagesCtx = async () => {
	const channelsRes = await getServerPageChannelsGet({});

	return {
		channels: channelsRes.props.data,
	};
};

export type GetServerAllPagesCtx = Awaited<
	ReturnType<typeof getServerAllPagesCtx>
>;
