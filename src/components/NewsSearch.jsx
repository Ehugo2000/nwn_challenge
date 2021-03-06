import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";

const NewsSearch = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState("");
  const getNewsServiceSearch = async () => {
    let response = await NewsService.search(idFromButtonClick);
    setPost(response);
  };

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    getNewsServiceSearch();
  }, [idFromButtonClick]);

  return (
    <>
      <Input
        data-cy="search_input"
        type="text"
        placeholder="Search topic"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></Input>
      <Button data-cy="search_button" onClick={handleClick}>
        Search
      </Button>
      <div data-cy='searched-posts'>
        <ul>
          {post.map((post) => (
            <li key={post.id}>
              {post.title}
              {post.author}]
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewsSearch;
