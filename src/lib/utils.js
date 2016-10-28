import serialize from 'form-serialize';

export const formHandler = (ev, action) => {
  ev.preventDefault();
  action(serialize(ev.target, { hash: true }));
  ev.target.firstElementChild.value = '';
}
