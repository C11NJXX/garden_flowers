import Initial from '../components/initial'
import Main from '../components/main'

function Home() {
  return (
   <>
   {/* 主要信息展示，包含欢迎词和一张大图 */}
    <Initial />
    {/* 展示引导语和具体产品（大类） */}
    <Main />
    </>
  );
}

export default Home;
