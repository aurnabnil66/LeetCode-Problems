class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        for i in range(0, len(nums)):
            if nums[i] == -1 and target == 0:
                return i + 1

            if nums[i] == target:
                return i
            
            if nums[i] > target:
                return i

            if nums[i - 1] < target < nums[i]:
                return i
                     
        if target > nums[len(nums) - 1]:
            return len(nums) 
        

if __name__ == "__main__":
    sol = Solution()
    nums = [-1,3,5,6]
    print("Original List : ", nums)
    
    target = 0
    index = sol.searchInsert(nums, target)
    print(index)
    