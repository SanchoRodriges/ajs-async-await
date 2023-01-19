export default class GameSaving {
  constructor(json) {
    const obj = JSON.parse(json);
    this.id = obj.id;
    this.created = obj.created;
    this.userInfo = {};
    this.userInfo.id = obj.userInfo.id;
    this.userInfo.name = obj.userInfo.name;
    this.userInfo.level = obj.userInfo.level;
    this.userInfo.points = obj.userInfo.points;
  }
}
