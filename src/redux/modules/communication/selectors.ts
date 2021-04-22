import { Call } from "./../../../models/call";
import { createSelector } from "reselect";
import { Chat } from "../../../models/chat";
import { Story } from "../../../models/story";

const getCommunicationNode = createSelector(
  (state: any) => state.communication,
  (communicationState) => communicationState
);

export const getChatsSelector = createSelector(
  [getCommunicationNode],
  (communicationState): Chat[] => communicationState.chats
);

export const getCallsSelector = createSelector(
  [getCommunicationNode],
  (communicationState): Call[] => communicationState.calls
);

export const getStorySelector = createSelector(
  [getCommunicationNode],
  (communicationState): Story => communicationState.story
);

export const getIsLoadingChats = createSelector(
  [getCommunicationNode],
  (communicationState): Boolean => communicationState.isLoadingChats
);

export const getIsLoadingCalls = createSelector(
  [getCommunicationNode],
  (communicationState): Boolean => communicationState.isLoadingCalls
);

export const getIsLoadingStatus = createSelector(
  [getCommunicationNode],
  (communicationState): Boolean => communicationState.isLoadingStatus
);
