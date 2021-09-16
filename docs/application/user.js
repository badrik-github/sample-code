
//SIGNUP
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Sign-Up
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                  example : "badrik"
 *                email:
 *                  type: string
 *                  example: "badrik@patel.com"
 *                password:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */



//SIGNIn
/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Sign-Ip
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "badrik@patel.com"
 *                password:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */


//Refresh-Token
/**
 * @swagger
 * /refressaccesstoken:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Refresh-Token
 *     tags:
 *        - User-Refresh-Token
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */


//Forgot-Password
/**
 * @swagger
 * /forgetpasswordemail:
 *   post:
 *     summary: Forgot-Password
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "badrik@patel.com"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */


//Change-Password (Via-Mail)
/**
 * @swagger
 * /changepassword:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Change-Password (Via-Mail)
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                newPassword:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Verify-Email (Via-Mail)
/**
 * @swagger
 * /verifyemail:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Verify-Email (Via-Mail)
 *     tags:
 *        - User
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

