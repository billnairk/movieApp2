import { useMatch, useNavigate } from "react-router-dom";

export default function OverLayHook() {
  const navigate = useNavigate();
  const matchPopular = useMatch("/:id");
  const matchCommingSoon = useMatch("/comming-soon/:id");
  const matchNowPlaying = useMatch("/now-playing/:id");
  const onClickOverlay = () => {
    if (matchPopular) navigate("/");
    else if (matchCommingSoon) navigate("/comming-soon");
    else if (matchNowPlaying) navigate("/now-playing");
  };
  return onClickOverlay;
}
