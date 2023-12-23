import TextExpander from "./component/TextExpander";

const App = () => {
  return (
    <div className="Main">
      <div className="exp">
        <TextExpander>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Dummy text ever since the 1500s,
        </TextExpander>
      </div>

      <div className="exp">
        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Aro Dekha"
          collapseButtonText="Bondo Kor"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </TextExpander>
      </div>

      <div className="exp">
        <TextExpander expanded={true}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </TextExpander>
      </div>
    </div>
  );
};

export default App;
