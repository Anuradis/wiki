import {Item} from './item';

export interface WikiAPI {
  batchcomplete: string;
  continue: object;
  query: {search: Item[]; searchinfo: {totalhints: number}};


}
