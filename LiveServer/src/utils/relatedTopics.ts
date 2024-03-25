import { MessageDestination } from "../messagesInterfaces/MessageTypesInterface";

export type TopicsRelations = {
  origin: MessageDestination;
  destination: MessageDestination;
};

export const topicRelations: TopicsRelations[] = [
  { origin: "folder", destination: "folder-copy" },
  { origin: "document", destination: "document-copy" },
];
