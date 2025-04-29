# Interviewer Guide - Queens Go Game

## Overview

This document outlines the interview process for the Queens Go game implementation. The task assesses a candidate's ability to translate game rules into a working solution, focusing on code organization, clarity, and problem-solving approach rather than optimization.

## Interview Setup

1. Share the `src/interview_template.js` file with the candidate
2. Explain the game rules and expectations
3. Ask the candidate to implement the game step by step
4. Guide the discussion along the flow outlined below

## Expected Flow of Development

Guide the candidate generally in this direction:

1. **Board Component** → 2. **Queen Component** → 3. **Game Component** → 4. **Integration**

Candidates are NOT expected to complete the entire problem. Quality over quantity is the focus.

## Discussion Points

### Board Component
- How would you represent the board?
- What data structure makes sense for tracking cell state?
- How would you track locked vs. unlocked squares?
- How would you handle the visual representation of the board?

### Queen Component
- What are the responsibilities of a Queen class?
- What methods should the Queen class implement?
- How would you handle move validation?
- How can you calculate the path a queen takes?

### Game Component
- How should the Game class coordinate the Board and Queen components?
- What's the best way to initialize the game?
- How would you handle turn management (if required)?

### Component Integration
- How do you ensure components communicate effectively?
- What are the trade-offs in your component design?
- How would you extend this design for additional features?

## Evaluation Criteria

### Strong Candidates Will:
- Break down the problem into clear components with appropriate responsibilities
- Write clear, well-structured pseudocode
- Think through edge cases
- Describe trade-offs in their solution
- Use good variable naming and code organization
- Ask clarifying questions when needed

### Red Flags:
- Jumping straight to coding without planning
- Overly focusing on optimization before functionality
- Unable to explain component design choices
- Getting stuck on individual sections without making progress
- Unwilling to receive guidance

## Trade-off Questions to Ask

- "How would your component structure change if we needed to support more than two queens?"
- "Would you handle the board component differently if the board size was much larger?"
- "How would you extend your Game component if squares could be unlocked under certain conditions?"
- "If performance became a concern, which parts of your solution would you optimize first?"

## Notes Template

```
Board Component:
- [Notes on approach and quality]

Queen Component:
- [Notes on approach and quality]

Game Component:
- [Notes on approach and quality]

Component Integration:
- [Notes on approach and quality]

Overall Strengths:
- [List key strengths observed]

Areas for Improvement:
- [List areas where candidate struggled]

Final Assessment:
- [Strong Hire / Hire / No Hire with brief justification]
``` 