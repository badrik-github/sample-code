//SIGNIn
/**
 * @swagger
 * /adminsignin:
 *   post:
 *     summary: Admin-Sign-Ip
 *     tags:
 *        - Admin
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
 * /adminregenerateaccess:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Admin-Refresh-Token
 *     tags:
 *        - Admin-Refresh-Token
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