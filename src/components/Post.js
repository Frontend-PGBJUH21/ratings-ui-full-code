import { Navigate, useParams, useNavigate } from "react-router-dom";

export const Post = () => {
  const params = useParams();

  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    //console.log("hello");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      Post: {params.id}
      <button onClick={onClick}>Click</button>
    </div>
  );
};
