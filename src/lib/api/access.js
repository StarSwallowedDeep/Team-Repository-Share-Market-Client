import client from "./client";

export const writeAccess = ({ device, location }) =>
    client.post('/api/access', { device, location });
