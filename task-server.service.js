export default class TaskServerService {
  constructor() {
    this.tasks = [
      'go to school',
      'buy a book',
      'play Pokémon GO'
    ];
  }

  getTasks() {
    return this.tasks;
  }
}