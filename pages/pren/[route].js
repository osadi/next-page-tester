const MyPage = () => {
  return null;
};

export default MyPage;

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
