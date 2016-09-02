export default function() {

  this.transition(
    this.fromRoute('index'),
    this.toRoute('blog'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('shared'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index.blog'),
    this.toRoute('index.blog.blog-details'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index.shared'),
    this.toRoute('index.shared.videos'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index.shared'),
    this.toRoute('index.shared.resources'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index.shared'),
    this.toRoute('index.shared.other-popular'),
    this.use('toLeft')
  );
}
