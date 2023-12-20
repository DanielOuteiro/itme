"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tabs,
  Tab,
  Input,
  Skeleton,
} from "@nextui-org/react";
import { columns, users } from "./data";
import Spline from "@splinetool/react-spline";
import { SearchIcon } from "./SearchIcon";

const statusColorMap = {
  "✓": "success",
  x: "danger",
};

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const handleAccordionSelectionChange = (keys) => {
    setSelectedKeys(keys);
    const selectedKey = Array.from(keys)[0];
    console.log("Selected Key:", selectedKey);
  };

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return <p>{cellValue}</p>;
      case "status1":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status1]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "status2":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status2]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "status3":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status3]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "status4":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status4]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "status5":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status5]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return <div className="relative flex items-center gap-2"></div>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <NextUIProvider>
      <Navbar>
        <NavbarBrand>
          <Image src="/logo.png" alt="YourLogo" width={50} height={50} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground">Features</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground">Customers</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link color="success" href="#">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="success" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="px-40 text-regal-green bg-slate-50">
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex-1 bg-transparent">
            <p className="font-pp-book text-7xl max-w-4xl">
              Transforming Tech Recruitment One Connection at a Time!
            </p>
            <p className="font-pp-medium text-xl max-w-4xl text-regal-green pt-20">
              ITme is not just a platform, it is a movement.
            </p>
            <p className="font-pp-book text-xl max-w-2xl text-regal-green pt-4">
              With over <span className="font-pp-medium">6000</span> Tech
              professionals across <span className="font-pp-medium">200+</span>
              countries, we are rewriting the rules. As a Tech professional,
              unlock your true potential, contribute to impactful projects, and
              be part of a community that thrives on innovation, collaboration,
              and continuous learning.
            </p>
          </div>
          <div className="flex-1 bg-transparent" style={{ height: '1000px' }}>
            <Spline scene="https://prod.spline.design/paUpCAVbp0RXkRdq/scene.splinecode" />
          </div>
        </div>
        <div className="bg-white">
          <div className="flex min-h-screen max-w-[80rem] mx-auto items-center justify-center">
            <div className="flex flex-col text-center">
              <p className="font-pp-book text-2xl">The Problem</p>
              <p className="font-pp-medium text-6xl text-regal-green pt-8 leading-1">
                In the vast tech landscape, profit-driven platforms have drained
                the industry, leaving a broken system in their wake.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-96"></div>
        <p className="font-pp-book text-4xl max-w-4xl pb-24">The solution </p>
        <div className="flex">
          {/* Spline */}
          <div className="flex-1 overflow-hidden w-1/2 h-full z-10 rounded-3xl">
            <div className="flex items-center justify-center h-full">
              <Spline scene="https://prod.spline.design/177vxZQhflUS-fiM/scene.splinecode" />
            </div>
          </div>

          {/* Accordion */}
          <div className="flex-1 -m-12 font-pp-medium relative z-20">
            <div className="flex items-center justify-center h-full">
              <Accordion
                variant="shadow"
                defaultExpandedKeys={["1"]}
                selectedKeys={selectedKeys}
                onSelectionChange={handleAccordionSelectionChange}
                className="flex-1"
              >
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="⚖️ Ecosystem, Not Parasitism"
                >
                  <p className="font-pp-book text-xl pb-2">
                    Our platform fees do not disappear into the corporate void.
                    They fund community projects chosen by the community through
                    a democratic vote, creating a self-sustaining cycle of
                    growth.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="🌐 Global Community Power"
                >
                  <p className="font-pp-book text-xl pb-2">
                    ITme is not just a platform, it is a global community hub. We
                    break the chains of talent scarcity by attracting both
                    active job seekers and employed tech professionals,
                    fostering collaboration on a scale never seen before.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="🌟 Earn, Learn, Build, Connect"
                >
                  <p className="font-pp-book text-xl pb-2">
                    No more upskilling for free! Projects initiated, funded, and
                    voted on by the community are the driving force behind ITme,
                    creating a space where members grow both professionally and
                    personally.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex min-h-screen items-center justify-center pt-96">
          <div className="flex-1 bg-transparent">
            <p className="font-pp-book text-4xl max-w-4xl">Why ITme? </p>
            <p className="font-pp-medium text-xl max-w-4xl text-regal-green pt-20">
              Discover the Person Behind the Profile, Uncover the Essence of
              Every Company
            </p>
            <p className="font-pp-book text-xl max-w-2xl text-regal-green pt-4">
              In the realm of tech recruitment, we understand that there is more
              to you than a profile picture and a company is far beyond a mere
              position. At ITme, we redefine the recruitment experience,
              acknowledging the unique narratives that make professionals and
              companies truly exceptional.
            </p>
          </div>
          <div className="flex-1 bg-transparent">
            <Spline scene="https://prod.spline.design/vAOdzyRBg2ZpfCGV/scene.splinecode" />
          </div>
        </div>
        <div className="flex min-h-screen items-center justify-center">
          <div className="min-w-[50%]">
            <Table>
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={users}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex-1 bg-transparen ml-32">
            <p className="font-pp-book text-4xl">So, what is the difference? </p>
            <Tabs aria-label="Options" className="pt-12">
              <Tab
                key="photos"
                title="Talent Marketplace"
                style={{ width: "200px" }}
              >
                <Card>
                  <CardBody>
                    Receive 2% of your annual salary after probationary period
                    when applying for jobs through our platform
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="music"
                title="Platform Contribution"
                style={{ width: "200px" }}
              >
                <Card>
                  <CardBody>
                    Receive rewards and recognition between peers for your
                    valuable contributions to the ITme platform.
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="videos"
                title="Project Funding"
                style={{ width: "200px" }}
              >
                <Card>
                  <CardBody>
                    Receive funding for projects and ideas approved by the ITme
                    community
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="other"
                title="Upskill for Free"
                style={{ width: "200px" }}
              >
                <Card>
                  <CardBody>
                    Receive free access to a wide range of community-approved
                    courses and learning resources.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            <p className="font-pp-medium text-xl max-w-4xl text-regal-green pt-12">
              Why ITme Stands Apart: Redefining Tech Platforms
            </p>
            <p className="font-pp-book text-xl max-w-2xl text-regal-green pt-4">
              In the dynamic landscape of professional platforms, ITme emerges
              as a trailblazer, setting itself apart with a unique set of
              features that redefine the tech recruitment experience. Unlike
              traditional platforms, ITme offers a distinctive combination of
              benefits that cater to the diverse needs of both tech
              professionals and companies.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex min-h-screen max-w-[80rem] mx-auto items-center justify-center">
            <div className="flex flex-col text-center">
              <p className="font-pp-book text-4xl ">
                Ready for a new career challenge?
              </p>
              <div className="pt-12">
                <Input
                  label="Search"
                  isClearable
                  radius="lg"
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-transparent",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-default-200/50",
                      "dark:bg-default/60",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-default-200/70",
                      "dark:hover:bg-default/70",
                      "group-data-[focused=true]:bg-default-200/50",
                      "dark:group-data-[focused=true]:bg-default/60",
                      "!cursor-text",
                    ],
                  }}
                  placeholder="Type to search..."
                  startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                  }
                />
              </div>
              <div className="flex flex-row pt-12">
                <Card className="w-[200px] space-y-5 p-4 m-2" radius="lg">
                  <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                  </Skeleton>
                  <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                      <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                  </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 m-2" radius="lg">
                  <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                  </Skeleton>
                  <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                      <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                  </div>
                </Card>
                <Card className="w-[200px] space-y-5 p-4 m-2" radius="lg">
                  <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                  </Skeleton>
                  <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                      <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
