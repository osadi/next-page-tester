const Template = () => {
  console.log("Should not see me");
  return null;
};
export default Template;

export const getServerSideProps = async () => {
  console.log("This should not happen");
  return {
    props: {
      something: "",
    },
  };
};
