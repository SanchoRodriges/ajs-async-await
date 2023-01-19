import GameSavingLoader from '../class/GameSavingLoader';
import GameSaving from '../class/GameSaving';

test('Сохранение сейва', async (done) => {
  const expected = await GameSavingLoader.load().then((saving) => saving, (error) => error);
  const equal = new GameSaving('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  expect(expected).toEqual(equal);
  done();
});
