import { Segment } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
import "./chatbot.css";
function Chatbot() {
  const steps = [
    {
      id: "Greet",
      message: "Hello there! Welcome to my portfolio.",
      trigger: "AskName",
    },
    {
      id: "AskName",
      message: "Before we start, may I know your name?",
      trigger: "WaitingName",
    },
    {
      id: "WaitingName",
      user: true,
      trigger: "Introduction",
    },
    {
      id: "Introduction",
      message:
        "Nice to meet you, {previousValue}! How can I assist you today? Are you interested in my projects or services?",
      trigger: "Options",
    },
    {
      id: "Options",
      options: [
        {
          value: "Projects",
          label: "Tell me about your projects",
          trigger: "Projects",
        },
        {
          value: "Services",
          label: "Tell me about your services",
          trigger: "Services",
        },
        { value: "Contact", label: "Contact information", trigger: "Contact" },
      ],
    },
    {
      id: "Projects",
      message:
        "I have worked on various exciting projects. You can check them out in the projects section of my portfolio!",
      end: true,
    },
    {
      id: "Services",
      message: "I offer a range of services, including:",
      trigger: "ServiceOptions",
    },
    {
      id: "ServiceOptions",
      options: [
        {
          value: "WebDevelopment",
          label: "Web Development",
          trigger: "WebDevelopment",
        },
        { value: "Design", label: "Design", trigger: "Design" },
        { value: "Backend", label: "Backend Development", trigger: "Backend" },
      ],
    },
    {
      id: "WebDevelopment",
      message:
        "In web development, I specialize in creating modern and responsive websites using the latest technologies.",
      end: true,
    },
    {
      id: "Design",
      message:
        "For design, I focus on creating visually appealing and user-friendly interfaces to enhance user experiences.",
      end: true,
    },
    {
      id: "Backend",
      message:
        "In backend development, I have expertise in building robust server-side applications and APIs to power web applications.",
      end: true,
    },
    {
      id: "Contact",
      message:
        "If you have any inquiries or would like to collaborate, please visit the contact page on my portfolio.",
      end: true,
    },
  ];

  return (
    <div>
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </div>
  );
}

export default Chatbot;
