class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        temp = []
    
        for i in range(0, len(nums)):
            if val in nums:
                nums.remove(val)
                temp.append(val)
        
        x = len(nums) 
            
        print(temp)
        
        return x
        
                       
if __name__ == "__main__":
    sol = Solution()
    nums = [0,1,2,2,3,0,4,2]
    print("Original List : ", nums)
    
    val = 2
    length = sol.removeElement(nums, val)
    print(length)