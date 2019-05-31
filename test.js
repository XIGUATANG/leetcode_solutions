var jump = function(nums) {
  if (nums.length <= 2) return nums.length - 1
  let result = nums.length,
    steps = []

  var minSteps = (arr, start = 0, index = 0) => {
    if (start >= result) return
    let i = arr[0] || 1
    if (i > arr.length - 2) {
      steps[index] = 1
      if (result > start + 1) {
        result = start + 1
      }
    } else
      while (i >= 1) {
        let reset = arr.slice(i--)
        if (reset.length) {
          minSteps(reset, start + 1, index + i)
        }
      }
  }
  minSteps(nums)
  return result
}

var jump = function(nums) {
  if (nums.length <= 2) return nums.length - 1
  let steps = []
  let getMinSteps = (arr = [], index) => {
    let i = arr[0] || 1
    if (i > arr.length - 2) {
      steps[index] = 1
      return 1
    } else {
      return
    }
  }

  return result
}
