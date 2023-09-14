import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils";

const fetchSingleData = (id) => {
  return customFetch.get(
    `/movie/${id}?api_key=35d53b06ecff5627945333051bd3ec2d&language=en-US`
  );
};

export const useRQSingleData = (id) => {
  return useQuery(["singleMovie", id], () => fetchSingleData(id));
};
