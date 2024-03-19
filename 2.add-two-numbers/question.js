/*
 * @Author: midjuly7 wangzuoqi@zju.edu.cn
 * @Date: 2024-03-19 19:00:12
 * @LastEditors: midjuly7 wangzuoqi@zju.edu.cn
 * @LastEditTime: 2024-03-19 19:10:25
 * @FilePath: \leetcode\leetcode-practice\2.add-two-numbers\question.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
* 2.两数相加
* 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
* 请你将两个数相加，并以相同形式返回一个表示和的链表。
* 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*
* 示例 1：
* 输入：l1 = [2,4,3], l2 = [5,6,4]
* 输出：[7,0,8]
* 解释：342 + 465 = 807.
* 示例 2：
* 输入：l1 = [0], l2 = [0]
* 输出：[0]
* 示例 3：
* 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
* 输出：[8,9,9,9,0,0,0,1]
*
* 提示：
* 	每个链表中的节点数在范围 [1, 100] 内
* 	0
* 	题目数据保证列表表示的数字不含前导零
*
*/


// @QUESTION_START
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  addTwoNumbers,
  {
    data: [[l1 = [2,4,3], l2 = [5,6,4]],[l1 = [0], l2 = [0]],[l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]]],
    structure: ["ListNode","ListNode"]
  },
  {
    data: [[7,0,8],[0],[8,9,9,9,0,0,0,1]],
    structure: ["ListNode"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/add-two-numbers/');
