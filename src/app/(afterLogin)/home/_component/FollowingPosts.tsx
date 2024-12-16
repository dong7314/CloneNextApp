"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
  });

  return (
    <>
      {data?.map((post) => {
        return <Post key={post.postId} post={post} />;
      })}
    </>
  );
}