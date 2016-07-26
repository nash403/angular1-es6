export default class LoggableDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
      loggable: '=',
      index: '='
    };
  }

  link(scope, element) {
    element.bind('click',(event) => {
      console.log(`I am task ${scope.index}: '${scope.loggable}'`);
    });
  }
}