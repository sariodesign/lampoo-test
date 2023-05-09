interface SectionTitleProps {
  title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return <h1 className="font-bold text-2xl mb-4">{props.title}</h1>;
};

export default SectionTitle;
