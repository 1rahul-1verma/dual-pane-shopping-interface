You are tasked with creating a dual-pane shopping interface. The interface consists of two panes:

- **Right Pane** (Cart): Shows the items added to the user’s cart.

#### Expectation

- Adding Items:
  - When a user adds an item from the left pane, it should be added to the cart.
  - Clicking on remove button in selected item from the list should remove it from the cart.
- Cart Display:

  - All selected items should be visible in the cart.

- Removing Items:
  - Clicking the **_Remove_** button for an item in the cart should remove it from the cart.
  - Both the item list and the cart should be updated accordingly.

#### Bugs

- Clicking on remove button in selected item from the left pane again should remove it from the cart.
- All selected items should be visible in the cart.
- Clicking the **_Remove_** button for an item in the cart should remove it from the cart.
- Both the item list and the cart should be updated accordingly.

#### Tasks

- The current code is **_NOT_** functioning as expected and requires correction. We need to resolve all identified _BUGS_ to ensure that the system meets all expected requirements..
- To ensure all expectations are met, it is essential that all sample test cases pass. Additionally, we must verify that our approach does not introduce any unnecessary **_re-renders_** of components.

### Submission Instructions

1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
