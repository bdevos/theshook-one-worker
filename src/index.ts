export default {
	async fetch(request: Request): Promise<Response> {
		const headers = new Headers(request.headers);

		headers.delete('X-City');
		headers.delete('X-Timezone');

		if (request.cf) {
			headers.append('X-City', (request.cf.city as string) ?? '');
			headers.append('X-Timezone', (request.cf.timezone as string) ?? '');
		}

		return fetch(request, { headers });
	},
};
