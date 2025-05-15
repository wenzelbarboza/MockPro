"use client";
import { Search, Moon, Sun, Download, X, Mic, Camera } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { handleDownload } from "@/lib/download";
import DashBoardBtn from "@/components/ui/dashBoardBtn";

const GoogleSearch = () => {
  const [searchQuery, setSearchQuery] = useState("my search");
  const [suggestions, setSuggestions] = useState<string[]>([
    "my search history",
    "My search for Warren Harding",
    "My search for Bill W",
    "my search history on my phone",
    "my search bar is not working",
    "my searches today",
    "my search history delete",
    "my search engine",
    "my search bar disappeared",
    "my search for meaning",
  ]);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionChange = (index: number, value: string) => {
    const newSuggestions = [...suggestions];
    newSuggestions[index] = value;
    setSuggestions(newSuggestions);
  };

  return (
    <>
      <div className="relative mb-10 flex min-h-screen w-full flex-col items-center bg-background pt-8 font-sans text-foreground">
        {/* Theme Toggle Button - Moved outside and above the frame */}
        <div className="mb-4 flex w-full max-w-3xl justify-end gap-2 px-4 md:px-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md border p-2 hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}
        </div>

        {/* Main content frame */}
        <div
          className="w-full max-w-3xl rounded-lg border border-gray-300 bg-card p-4 shadow-lg dark:border-gray-700 md:p-6"
          id="google-frame"
        >
          {/* Google Logo and Search Bar */}
          <div className="m-auto mb-6 flex w-full max-w-2xl flex-col items-center px-4">
            <Image
              src={"/google.png"} // Ensure this image is in your public folder
              alt="Google Logo"
              width={272}
              height={92}
              className="mb-7 h-auto w-[150px] md:w-[200px] lg:w-[272px]"
              priority
            />
            <div className="relative w-full">
              {/* This div is the main container for search input and suggestions */}
              <div className="w-full rounded-lg border border-gray-300 bg-card shadow-md dark:border-gray-700 dark:bg-gray-800">
                {/* Search Input Section */}
                <div className="flex items-center px-3 py-2">
                  <Search className="ml-1 mr-3 h-5 w-5 flex-shrink-0 text-gray-400" />
                  <input
                    type="text"
                    className="w-full flex-grow bg-transparent text-base text-foreground placeholder-gray-500 outline-none dark:placeholder-gray-400"
                    placeholder="my search"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                  <button
                    onClick={() => setSearchQuery("")}
                    className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <X size={20} />
                  </button>
                  <div className="mx-2 h-6 w-px flex-shrink-0 bg-gray-300 dark:bg-gray-600"></div>{" "}
                  {/* Vertical Separator */}
                  <button className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <Mic size={20} />
                  </button>
                  <button className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <Camera size={20} />
                  </button>
                </div>

                {/* Suggestions Section */}
                <div className="border-t border-gray-300 dark:border-gray-700">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer items-center px-3 py-2 hover:bg-accent"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      <Search className="mr-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                      {/* {editingSuggestionIndex === index ? (
                        <input
                          type="text"
                          value={suggestion}
                          onChange={(e) =>
                            handleSuggestionChange(index, e.target.value)
                          }
                          onBlur={() => setEditingSuggestionIndex(null)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setEditingSuggestionIndex(null);
                            }
                          }}
                          className="w-full bg-transparent p-0 text-sm text-foreground outline-none"
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingSuggestionIndex(index);
                          }}
                          className="text-sm text-foreground"
                        >
                          {suggestion}
                        </span>
                      )} */}

                      <input
                        type="text"
                        value={suggestion}
                        onChange={(e) =>
                          handleSuggestionChange(index, e.target.value)
                        }
                        className="w-full bg-transparent p-0 text-sm text-foreground outline-none"
                        autoFocus
                      />
                    </div>
                  ))}
                  {suggestions.length === 0 && (
                    <p className="px-4 py-2 text-sm text-muted-foreground">
                      No suggestions available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button Section */}
        <div className="mt-6 flex w-full justify-center">
          <button
            onClick={() => handleDownload("google-frame")}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Download size={18} />
            Download Page
          </button>
        </div>
        <DashBoardBtn />
      </div>
    </>
  );
};

export default GoogleSearch;
