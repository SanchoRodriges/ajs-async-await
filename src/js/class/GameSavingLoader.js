import json from '../parser';
import read from '../reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    return new GameSaving(await json(await read()));
  }
}
