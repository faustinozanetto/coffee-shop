export type CarouselContextState = {
  currentIndex: number;
  isTransitioning: boolean;
};

export enum ACTION_TYPES {
  SetIndex = 'SET_CURRENT_INDEX',
  SetTransitioning = 'SET_TRANSITIONING',
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type CarouselPayload = {
  [ACTION_TYPES.SetIndex]: {
    index: number;
  };
  [ACTION_TYPES.SetTransitioning]: {
    transitioning: boolean;
  };
};

export type CarouselActions = ActionMap<CarouselPayload>[keyof ActionMap<CarouselPayload>];
