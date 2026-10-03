import { removeTestUsers } from "./test-db";
export default async function globalTeardown() { await removeTestUsers(); }

