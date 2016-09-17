export default function() {

  this.transition(
    this.toRoute('blog'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('shared'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('about'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('details'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('details'),
    this.toRoute('blog'),
    this.use('toRight')
  );

  this.transition(
    this.toRoute('shared.videos'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('shared.resources'),
    this.toRoute('shared.videos'),
    this.use('toRight')
  );

  this.transition(
    this.fromRoute('shared.other-popular'),
    this.toRoute('shared.videos'),
    this.use('toRight')
  );

  this.transition(
    this.toRoute('shared.resources'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('shared.other-popular'),
    this.toRoute('shared.resources'),
    this.use('toRight')
  );

  this.transition(
    this.toRoute('shared.other-popular'),
    this.use('toLeft')
  );
}
