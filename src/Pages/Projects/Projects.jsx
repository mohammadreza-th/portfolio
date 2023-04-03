import Layout from "../../components/layout/layout";
import logo from "./pic_01.jpg";
import Card from "../../components/Card";

function Projects() {
  return (
    <Layout>
      <div className=" bg-sky-100 p-2 border-b-2 border-green-900 ">
        <h1 className="text-4xl text-sky-800 font-bold pb-2">Projects</h1>
        <p className="  pb-2 px-3 text-sky-800">you can see my done projects below!</p>
      </div>
      <div className="mx-auto flex shadow-[inset_30px_30px_100px_0_rgba(0,0,0,0.3)] overflow-x-auto bg-sky-200 w-6/6 p-7">
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
        <Card
          imgSource={logo}
          link="https://mohammadreza-th.github.io/date-converter-github/"
          title="Date Converter"
        >
          <ul className="list-disc ">
            <li>full js without using library</li>
            <li>solar to gregorian</li>
            <li>gregorian to solar</li>
            <li>day and month validation</li>
            <li>Considering leap years in calculations </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
}

export default Projects;
