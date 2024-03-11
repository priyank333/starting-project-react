export default function Tabs({ buttons, content }) {
  return (
    <>
      <menu>{buttons}</menu>
      {content}
    </>
  );
}
