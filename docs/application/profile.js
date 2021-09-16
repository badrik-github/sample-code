
/**
 * @swagger
 * /getuserprofile/{userid}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get-User-Profilt
 *     parameters:
 *      - in: path
 *        name: userid
 *        schema:
 *          type: number
 *        required: true
 *        description: user id
 *     tags:
 *        - Profile
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


/**
 * @swagger
 * /edituserprofile/{userid}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Edit-Profile
 *     parameters:
 *      - in: path
 *        name: userid
 *        schema:
 *          type: number
 *        required: true
 *        description: user id
 *     tags:
 *        - Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                  example: "Dragon"
 *                companyName:
 *                  type: string
 *                  example: "poly-trip"
 *                contactNumber:
 *                  type: Number
 *                  example: 122428123
 *                address:
 *                  type: String
 *                  example: "ab-adsm-nladkmfmdsa"
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

/**
 * @swagger
 * /changepassword/{userid}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Edit-Profile
 *     parameters:
 *      - in: path
 *        name: userid
 *        schema:
 *          type: number
 *        required: true
 *        description: user id
 *     tags:
 *        - Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                newpassword:
 *                  type: string
 *                  example: "Dragon"
 *                oldpassword:
 *                  type: string
 *                  example: "poly-trip"
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


/**
 * @swagger
 * /uploadprofilephoto/{userid}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Edit-Profile
 *     parameters:
 *      - in: path
 *        name: userid
 *        schema:
 *          type: number
 *        required: true
 *        description: user id
 *     tags:
 *        - Profile
 *     requestBody:
 *       required: true
 *       content:
 *           multipart/form-data:
 *              schema:
 *                type: object
 *                properties:
 *                  file:
 *                      type: string
 *                      format: binary
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