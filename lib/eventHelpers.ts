export function preventDefault<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.preventDefault();
    func(event);
  };
}
