"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, StarIcon, GitBranchIcon, UsersIcon } from "lucide-react";
import { getSearchResults, OctoResponse } from "./actions/search.action";
import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [repositories, setRepositories] = useState<OctoResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const searchQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q")?.toString();

    const response = await getSearchResults(query as string);
    console.log(response);
    // Create boxes and append them to the container

    setRepositories(response);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Discover the Best Products
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Search through our extensive catalog to find the perfect item.
        </p>
      </div>
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <form className="flex gap-0 items-center" onSubmit={searchQuery}>
          <Input
            name="q"
            type="search"
            placeholder="Search for products..."
            className="w-full rounded-l-xl bg-background pl-10 pr-4 py-2.5  h-[150%] text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary rounded-r-none"
          />
          <Button type="submit" className="h-full w-[20%] p-3 text-lg rounded-r-xl rounded-l-none">
            search
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="loading justify-self-center align-middle col-span-2">
            {" "}
            Loading...
          </div>
        ) : repositories ? (
          repositories.map((repo, index) => (
            <Card key={repo.id} className="flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center px-3">
              <img
                src={repo.organization?.avatar_url || repo.owner.avatar_url}
                alt="Repository Image"
                width={200}
                height={200}
                className="w-32 h-32 object-cover rounded-full border-4 border-stone-400"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
              />
              <CardContent className=" flex-1 items-start justify-start">
                <CardHeader>
                  <CardTitle className="text-xl font-bold m-0 p-0"><Link href={repo.html_url}>{repo.name}</Link></CardTitle>
                </CardHeader>
                <div className="flex items-center gap-2 ">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <span className="text-sm text-muted-foreground">{repo.stargazers_count}</span>
                  <GitBranchIcon className="w-4 h-4 fill-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{repo.open_issues_count}</span>
                  <UsersIcon className="w-4 h-4 fill-muted-foreground" />
                  <span className="text-sm text-muted-foreground">10</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {repo.description}
                </p>
                <Link href={repo.html_url} className="text-primary hover:underline">read more</Link>
              </CardContent>
            </div>
          </Card>
          ))
        ) : (
          <div className="hmm">repository not found</div>
        )}
      </div>
    </div>
  );
}
