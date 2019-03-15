# Data-Structures-Algorithms-in-Javascript


Steps to be followed before solving a problem:(Colt Steele)

1)Restate the problem in your own words. <br />
2)what are the inputs to the problem? Like : integer,float,what about string for large numbers. <br />
3)what are the outputs that should come? <br />
4)do I have enough information to solve the problem?<br />
5)how should we label the important pieces of data?<br />

taken from randerson112358: 


![alt text](https://cdn-images-1.medium.com/max/1600/1*iEbD3x2S5KOiEI6ZOltp9w.png "taken from randerson112358")

(Geeks -Dhawal Arora)
A lot of students get confused while understanding the concept of time-complexity, but in this article, we will explain it with a very simple example:

Imagine a classroom of 100 students in which you gave your pen to one person. Now, you want that pen. Here are some ways to find the pen and what the O order is.

O(n2): You go and ask the first person of the class, if he has the pen. Also, you ask this person about other 99 people in the classroom if they have that pen and so on,
This is what we call O(n2).

O(n): Going and asking each student individually is O(N).

O(log n): Now I divide the class into two groups, then ask: “Is it on the left side, or the right side of the classroom?” Then I take that group and divide it into two and ask again, and so on. Repeat the process till you are left with one student who has your pen. This is what you mean by O(log n).



I might need to do the O(n2) search if only one student knows on which student the pen is hidden. I’d use the O(n) if one student had the pen and only they knew it. I’d use the O(log n) search if all the students knew, but would only tell me if I guessed the right side.

#### Patterns for solving problems in javascript

1)Frequency Pattern <br />
2)Multiple Pointer Pattern <br />
3)Sliding window pattern <br />
4)Divide & Conquer pattern <br />


