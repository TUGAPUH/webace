import ChatPage from "./Pages/ChatPage/ChatPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import MusicPage from "./Pages/MusicPage/MusicPage";
import WordlePage from "./Pages/WordlePage/WordlePage";

export const privateRoutes = [
  {
    path: "/chat",
    component: <ChatPage />,
  },
  {
    path: "/music",
    component: <MusicPage />,
  },
  {
    path: "/contacts",
    component: <ContactPage />,
  },
  {
    path: "/wordle",
    component: <WordlePage />,
  },
];
