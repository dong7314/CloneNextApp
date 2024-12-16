"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowRecommends } from "../_lib/getFollowRecommends";
import FollowRecommend from "./FollowRecommend";
import { User } from "@/model/User";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ["users", "followRecommends"],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
  });

  return (
    <>
      {data?.map((user) => (
        <FollowRecommend key={user.id} user={user} />
      ))}
    </>
  );
}
