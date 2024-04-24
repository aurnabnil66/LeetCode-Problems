class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums or len(nums) == 1:
            print("List is empty")
        
        left = 1
        
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[left] = nums[i]
                left +=1
            
            
        return left
           
        
if __name__ == "__main__":
    sol = Solution()
    nums = [0,0,1,1,1,2,2,3,3,4]
    print("Original List : ", nums)
    
    length = sol.removeDuplicates(nums)
    print(length)
    
    