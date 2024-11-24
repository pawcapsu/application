import { browser, dev } from '$app/environment';
import { WorkerClient } from "@triplit/client/worker-client"
import { schema } from "@pawcapsu/pawdb/schema";
import workerUrl from '@triplit/client/worker-client-operator?url';

export const pawdb = new WorkerClient({
  storage: 'indexeddb',
  workerUrl: dev ? workerUrl : undefined,
  autoConnect: browser,
  schema,
  // todo
  serverUrl: "",
  token: "",
});
