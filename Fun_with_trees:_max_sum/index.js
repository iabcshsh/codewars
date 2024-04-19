function maxSum(root) {
  if (!root) return 0;

  function findMaxPathSum(node) {
    if (!node.left && !node.right) {
      return node.value;
    }

    let leftSum = -Infinity;
    let rightSum = -Infinity;

    if (node.left) {
      leftSum = findMaxPathSum(node.left);
    }
    if (node.right) {
      rightSum = findMaxPathSum(node.right);
    }

    return node.value + Math.max(leftSum, rightSum);
  }

  return findMaxPathSum(root);
}
