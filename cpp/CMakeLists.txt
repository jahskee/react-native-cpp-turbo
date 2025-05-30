cmake_minimum_required(VERSION 3.13)
project(cppturbo)

set(CMAKE_CXX_STANDARD 17)

add_library(cppturbo SHARED
    MathOperations.cpp
)

target_include_directories(cppturbo PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}
)