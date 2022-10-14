var classNames = require('classnames');
classNames('foo', 'bar'); // => 'foo bar'

classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'


var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'


let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });



// react_demo1

// class Button extends React.Component {
//   // ...
//   render () {
//     var btnClass = 'btn';
//     if (this.state.isPressed) btnClass += ' btn-pressed';
//     else if (this.state.isHovered) btnClass += ' btn-over';
//     return <button className={btnClass}>{this.props.label}</button>;
//   }
// }



// react_demo1
var classNames = require('classnames');

class Button extends React.Component {
  // ...
  render () {
    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
}




var btnClass = classNames('btn', this.props.className, {
  'btn-pressed': this.state.isPressed,
  'btn-over': !this.state.isPressed && this.state.isHovered
});
