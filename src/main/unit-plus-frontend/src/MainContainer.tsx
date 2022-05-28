import { FC } from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Announcer } from "./components/Announcer";

const posts: Array<{ id: string; name: string }> = [
  { id: "1", name: "This first post is about React" },
  { id: "2", name: "This next post is about Preact" },
  { id: "3", name: "We have yet another React post!" },
  { id: "4", name: "This is the fourth and final post" },
];

const filterPosts = (
  posts: Array<{ id: string; name: string }>,
  query: string
) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post: { id: string; name: string }) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

export interface MainContainerProps {
  readonly?: boolean;
}

export const MainContainer: FC<MainContainerProps> = ({
  readonly = false,
}: MainContainerProps) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <Router>
      <div className="App">
        <Announcer message={`${filteredPosts.length} posts`} />
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery ? (
          <ul>
            {filteredPosts.map((post) => (
              <li key={post.id}>{post.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Router>
  );
};
